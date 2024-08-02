const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function createYarnWorkspace(workspaceName) {
    const packageJsonPath = path.resolve(process.cwd(), 'package.json');
    
    if (!fs.existsSync(packageJsonPath)) {
        console.error('No package.json found in the current directory.');
        process.exit(1);
    }
    
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));

    if (!packageJson.workspaces) {
        console.error('No workspaces defined in the package.json.');
        process.exit(1);
    }

    const newWorkspacePath = path.resolve(process.cwd(), `packages/${workspaceName}`);
    
    if (fs.existsSync(newWorkspacePath)) {
        console.error(`The directory ${newWorkspacePath} already exists.`);
        process.exit(1);
    }

    fs.mkdirSync(newWorkspacePath, { recursive: true });

    const newPackageJson = {
        name: workspaceName,
        version: '1.0.0',
        main: 'dist/index.js',
        scripts: {
            build: "tsc"
        },
        dependencies: {},
        devDependencies: {
            typescript: "^4.0.0"
        }
    };

    fs.mkdirSync(path.join(newWorkspacePath, 'src'));
    fs.writeFileSync(path.join(newWorkspacePath, 'src/index.ts'), '');
    fs.writeFileSync(path.join(newWorkspacePath, 'package.json'), JSON.stringify(newPackageJson, null, 2));

    packageJson.workspaces.push(`packages/${workspaceName}`);
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

    execSync('yarn install', { stdio: 'inherit', cwd: newWorkspacePath });

    console.log(`Workspace ${workspaceName} created successfully.`);
}

const [,, workspaceName] = process.argv;

if (!workspaceName) {
    console.error('Please provide a workspace name.');
    process.exit(1);
}

createYarnWorkspace(workspaceName);

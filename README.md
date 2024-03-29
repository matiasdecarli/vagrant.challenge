## Challenge

## Requirements

- Vagrant 1.8.4 or greater
- Ansible 2.1.0.0 or greater

## How to

Just run `vagrant up`

## How it works

- Vagrant will create the box with a custom IP: 192.168.13.37 (This is because we don't want to target ALL hosts)
- After the creation, the provisioning will begin:
	- First, Ansible will install the required role: nodesource.node that will be used to install a fixed node.js version (We don't want to point to the latest since it could break something in the future)
	- Then, it will run `playbook.yml` wich is going to provision the VM and copy the app files
	- At last, it will run `npm install` to install the dependencies and run the app

## How the app works

- Given a certain URL, it will query that URL and retrieve the HTML
- It will write to a file the output with the desired format

## TO DO

- The node.js app could be a git submodule and live in his own repo
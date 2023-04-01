#!/bin/bash

nvm install node
npm install cnpm -g --registry=https://registry.npmmirror.com
cnpm install -g yo generator-code
# cnpm install --save-dev @vscode/vsce @fabiospampinato/bump
cnpm install @vscode/vsce @fabiospampinato/bump
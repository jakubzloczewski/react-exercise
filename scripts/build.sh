#!/usr/bin/env bash
./scripts/clean.sh
mkdir public
cp ./frontend/index.html ./public/index.html
webpack

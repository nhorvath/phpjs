#!/usr/bin/env bash
set -o pipefail
set -o errexit
set -o nounset
# set -o xtrace

# Set magic variables for current file & dir
__dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
__file="${__dir}/$(basename "${BASH_SOURCE[0]}")"
__base="$(basename ${__file} .sh)"
__webroot="$(cd "$(dirname "${__dir}")" && pwd)"

ghpages_repo=${GHPAGES_REPO:-"kvz/phpjs"}
ghpages_branch=${GHPAGES_BRANCH:-"gh-pages"}
ghpages_url=${GHPAGES_URL:-"git@github.com:${ghpages_repo}.git"}

echo "--> Deploying to GitHub pages.."
mkdir -p /tmp/deploy-${ghpages_repo}

# Custom steps
rsync \
  --archive \
  --delete \
  --checksum \
  --no-times \
  --no-group \
  --no-motd \
  --no-owner \
"${__webroot}/_site/" /tmp/deploy-${ghpages_repo} > /dev/null

echo 'This branch is just a deploy target. Do not edit. You changes will be lost.' \
  |tee /tmp/deploy-${ghpages_repo}/README.md

(cd /tmp/deploy-${ghpages_repo} \
  && git init && git checkout -B ${ghpages_branch} && git add --all . \
  && git commit -nm "Update ${ghpages_repo} website by ${USER}" \
  && (git remote add origin ${ghpages_url}|| true)  \
  && git push origin ${ghpages_branch}:refs/heads/${ghpages_branch} --force) > /dev/null

rm -rf /tmp/deploy-${ghpages_repo}

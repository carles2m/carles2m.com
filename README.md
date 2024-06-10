<div id="top"></div>

<p align="center">
  <img alt="React dependency version (prod)" src="https://img.shields.io/github/package-json/dependency-version/carles2m/carles2m.com/react">
  <img alt="Next dependency version (prod)" src="https://img.shields.io/github/package-json/dependency-version/carles2m/carles2m.com/next">
  <img alt="TypeScript dependency version (dev)" src="https://img.shields.io/github/package-json/dependency-version/carles2m/carles2m.com/dev/typescript">
  <img alt="Tailwind CSS dependency version (dev)" src="https://img.shields.io/github/package-json/dependency-version/carles2m/carles2m.com/dev/tailwindcss">
  <img alt="NodeJs dependency version (dev)" src="https://img.shields.io/badge/node-LTS-blue">
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/github/license/carles2m/carles2m.com">
  <img alt="CodeQL Workflow Status" src="https://img.shields.io/github/actions/workflow/status/carles2m/carles2m.com/codeql-analysis.yml?branch=main&label=CodeQL">
  <img alt="GitHub deployments" src="https://img.shields.io/github/deployments/carles2m/carles2m.com/production?label=deployment">
</p>

<p align="center">
  <a href="https://github.com/carles2m/carles2m.com/issues/new?assignees=carles2m&labels=bug&template=bug_report.md">Report Bug</a>
  ·
  <a href="https://github.com/carles2m/carles2m.com/issues/new?assignees=carles2m&labels=enhancement&template=feature_request.md">Request Feature</a>
</p>

# [carles2m.com](https://carles2m.com)

<p align="center">
  <img alt="carles2m.com" src="https://image.thum.io/get/maxAge/24/https://carles2m.com/">
</p>

<p align="end">(<a href="#top">back to top</a>)</p>

---

## Getting Started

### Prerequisites

1. Install the LTS version of [Node](https://nodejs.org/).

### Installation

1. Clone the repo:
```bash
git clone https://github.com/carles2m/carles2m.com.git
```
1. Install dependencies: 
```bash
cd carles2m.com
npm i
```

### Deployment

* Development:
```bash
npm run dev
```
* Production:
```bash
npm run build
npm run start
```

<p align="end">(<a href="#top">back to top</a>)</p>

## Using Docker

1. [Install Docker](https://docs.docker.com/get-docker/) on your machine.
1. Build the container: `docker build -t carles2m/website .`
1. Run the container: `docker run -p 3000:3000 carles2m/website`

<p align="end">(<a href="#top">back to top</a>)</p>

## Using Kubernetes

The Kubernetes config file `kubernetes/config.yml` is provided as a sample.

<p align="end">(<a href="#top">back to top</a>)</p>

## Acknowledgments

* [Shandy Sulen](https://www.linkedin.com/in/shandysulen) and [PopRank](https://poprank.io).
* [Next.js](https://nextjs.org)
* [Tailwind CSS](https://tailwindcss.com/)
* [Vercel](https://vercel.com/)
* [Laura Beatris's Site](https://github.com/LauraBeatris/laurabeatris.com)
* [Img Shields](https://shields.io)
* [Screenshot Generator](https://www.thum.io/)

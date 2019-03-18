# Contributing to Ossus

## CDK Open Source Contributor Code of Conduct

This code of conduct outlines expectations for participation in CDK-managed open source communities, as well as steps for reporting unacceptable behavior. We are committed to providing a welcoming and inspiring community for all. People violating this code of conduct may be banned from the community.

Our open source communities strive to:

- Be friendly and patient – Remember you might not be communicating in someone else's primary spoken or programming language, and others may not have your level of understanding.
- Be welcoming – Our communities welcome and support people of all backgrounds and identities. This includes, but is not limited to members of any race, ethnicity, culture, national origin, color, immigration status, social and economic class, educational level, sex, sexual orientation, gender identity and expression, age, size, family status, political belief, religion, and mental and physical ability.
- Be respectful – We are a world-wide community of professionals, and we conduct ourselves professionally. Disagreement is no excuse for poor behavior and poor manners.
- Understand disagreements – Disagreements, both social and technical, are useful learning opportunities. Seek to understand the other viewpoints and resolve differences constructively.
- This code is not exhaustive or complete. It serves to capture our common understanding of a productive, collaborative environment. We expect the code to be followed in spirit as much as in the letter.

### Scope

This code of conduct applies to all communities for CDK-managed open source projects, regardless of whether the project explicitly calls out its use of this code. The code also applies in public spaces when an individual is representing a project or its community. Examples include using an official project e-mail address, posting via an official social media account, or acting as an appointed representative at an online or offline event. Representation of a project may be further defined and clarified by project maintainers.

### Curation

Open sourcing too many projects that get little attention or resources can end up being counter-productive. As a rule, we prefer to share those projects that have been internally tested, used and validated, and where we think a big impact can be made.

If a project is bound to receive less attention in the future, we commit to communicating that to our users clearly. Whenever possible, we try to find them new curators.

### Reporting Code of Conduct Issues

We encourage all communities to resolve issues on their own whenever possible. This builds a broader and deeper understanding and ultimately a healthier interaction. In the event that an issue cannot be resolved locally, please feel free to report your concerns by either logging them or contacting a maintainer as appropriate.

In your report please include:

- Your contact information.
- Names (real, usernames or pseudonyms) of any individuals involved. If there are additional witnesses, please include them as well.
- Your account of what occurred, and if you believe the incident is ongoing. If there is a publicly available record (such as a public chat log), please include a link or attachment.
- Any additional information that may be helpful.

All reports will be reviewed by our team and will result in a response that is deemed necessary and appropriate to the circumstances. Where additional perspectives are needed, the team may seek insight from others with relevant expertise or experience. The confidentiality of the person reporting the incident will be kept at all times. Involved parties are never part of the review team.

Anyone asked to stop unacceptable behavior is expected to comply immediately. If an individual engages in unacceptable behavior, the review team may take any action they deem appropriate, including a permanent ban from the community.

This code of conduct is based on the template established by the TODO Group and used by numerous other communities (e.g., [Facebook](https://code.facebook.com/pages/876921332402685/open-source-code-of-conduct), [Microsoft](https://opensource.microsoft.com/codeofconduct/), [Twitter](https://engineering.twitter.com/opensource/code-of-conduct), [Yahoo](https://yahoo.github.io/codeofconduct)).

## How to Contribute

> Ossus is the first open source project from CDK and is under active development by internal teams. We are working to ensure that our process is transparent and documented to allow for all users to have the same great experience using Ossus. Ossus accepts changes from both external and internal developers and will follow a roadmap that fits with the best needs for Ossus as a whole. We want to keep our development open and make all changes go through the same pull request and review process.

### What should be contributed

> Make sure you always open an issue before you submit a PR so we can work out anything before you put in the effort of coding!

This project holds the *core* functionality of Ossus which includes the ability to set up a base documentation site. Any bug fixes and features that directly relate to this objective should be directly added to this project and its packages. Anything that is ancillary to these objectives should be created as a separate package that can plugin to the Ossus core and named `ossus-*` to define it's purpose. We are still working hard to refine the plugin process, if you have ideas or contributions we would be excited to take a look!

### Working with Ossus

Ossus uses a monorepo managed by lerna to handle working with all of the packages. This project contains 4 active packages (`create-ossus`, `ossus`, `ossus-components`, and `ossus-scripts`) and one test-only package (`sample`). The sample project is a site setup to pull the packages from the other directories so you can test your changes on a working Ossus site.

Steps to get the project running:

1. Ensure you have at least v8.0.0 of Node.js
1. Fork this repository and clone onto your machine
1. `npm install` dependencies at the root level of the project
1. Once all of the dependencies are installed run `npm run bootstrap` to get lerna connections setup
1. Make your changes to the package where your changes belong
1. Run `npm run dev` to start the sample site where you can test your changes (Feel free to make changes to the sample project to best test your changes)
1. Run `npm run lint` to ensure your changes follow the style guide of the project and fix any issues found
1. Once you have confirmed your changes work as intended create a PR against the original repository you forked
1. The core team will check out your changes, give feedback, and ultimately merge or decline the PR.
1. If the PR is merged the core team will handle releasing the changes in the next release cycle.

#### Multiple Packages

As has been mentioned before this repository is a monorepo for four packages exposed as part of Ossus. Here is what each of them contains and handles.

##### Ossus Core (`ossus`)

The ossus core handles critical functionality for running an Ossus based site including markdown rendering, routing, config injection, and some core utilities. The exposed modules are:

- `MarkdownRenderer`
- "`Configurator`" (`ConfigProvider` & `withConfig`)
- `generatePathMap` utility
- `routes`
- `withDocRouting` HOC

##### Ossus Components (`ossus-components`)

Ossus components handle the core components that define what the layout and look of a default ossus site look like. These are the building blocks that take advantage of the core modules to make a usable and functional site. The ossus components package exposes many React components and are defined in the [ossus documentation](https://ossus.fortellis.io).

##### Ossus Scripts (`ossus-scripts`)

Ossus scripts defines the build time scripts that generate the project structure required for ossus core to be able to decypher the documentation structure. These scripts generate the table of contents file from the file structure. This package exposes only one module that is made to be run on the command line and set up as part of the build scripts.

##### Create Ossus (`create-ossus`)

Create Ossus is the tool that puts all of these pieces together in a meaningful way for a first time user. This helps to expedite the development process by reducing the hand-written boilerplate and setup required to make an Ossus based site.

`npx create-ossus`

### Development Experience Roadmap

Ossus is a new project and we are still working on making the developer experience great and foster a community around it. We want to make continual improvments that will bring Ossus up to the standard many great open source project have set before us.

1. Set up unit tests across all packages to ensure code quality and validity
1. Set up CI to ensure the processes are upheld constantly
1. Continue to improve upon our documentation so that the full capabilities of Ossus are made avaliable
1. Set up prettier along with linting to ensure readablity and consistency of the project
1. Fine tune plugins and create guidelines for external Ossus packages

Hi!

I made some very basic unit tests for some of the key components of the form. I've used jest and vue-test-utils to do this.

![pony_unit](https://user-images.githubusercontent.com/4117768/95041838-38166500-06ae-11eb-8b07-d700031037b2.png)
> `npm run test`

<br>

Also made some e2e test using cypress and used this challenge tasks as the test assertions (check this [gif](https://user-images.githubusercontent.com/4117768/95041659-b9212c80-06ad-11eb-8b54-3ce40199bf27.gif)).
<br>
<br>

![e2e_spec](https://user-images.githubusercontent.com/4117768/95041655-b7576900-06ad-11eb-9ff9-f543e1f07097.png)
> `npm run test:e2e:open` - opening the browser or
> `npm run test:e2e` without the browser.


<br>

**Extra feature**<br>
I've parsed the form fields at the url using watcher functions and vue router so the user don't lose inputed data:

![url](https://user-images.githubusercontent.com/4117768/95042840-7feabb80-06b1-11eb-8bb3-7d13994dc8cf.gif)


### Other instructions
```bash
# dev
npm run dev

# build static assets. I am not using ssr to deploy it to gh-pages
npm run generate

# unit tests
npm run test

# e2e tests
npm run test:e2e

```

You can check the [build of this website](http://yubathom.github.io/senior-frontend-test/) deployed at gh-pages. I've used travis-ci to do this.



<br><br><hr>





![Dog and Pony Studios](https://www.dogandponystudios.com/app/themes/dps/assets/public/images/logo-fbe89868bd.svg)

# Senior Frontend Developer Test

**Welcome to our Senior Frontend Developer Test**

This test consists of a series of tasks which may take between 2–4 hours to complete, depending on your experience level. The primary purpose of this test is to infer your “logical thinking” and “problem-solving” skills.


## Scenario

To recreate the design and functionality of a generic office-listings page. Please navigate through the [interactive prototype](https://www.figma.com/proto/VU2BJHrMmoSEdQmMa1EbYP/Front-end-Test?node-id=451%3A336&viewport=767%2C416%2C0.5802898406982422&scaling=min-zoom) to better understand the scope and requirements.


## Tasks

1. Fork this repository (to jump-start your test)
1. Recreate [the design](https://www.figma.com/proto/VU2BJHrMmoSEdQmMa1EbYP/Front-end-Test?node-id=451%3A336&viewport=767%2C416%2C0.5802898406982422&scaling=min-zoom) using [Vue.js](https://vuejs.org/) and [TailwindCSS](https://tailwindcss.com/)
1. Populate the office listings from a datasource (JSON or hard-coded array)
1. Recreate the following interactivity
    1. Toggle open/close office cards
    1. “Add new location” (add new office to list)
    1. “Edit office” (edit and save office data)
    1. While adding or editing an office, the “Save” button should be disabled until all fields have been validated
    1. “Delete office” (remove office from list)


## Deadline

Please submit your test as a Github repository URL, along with a readme file containing instructions on how to set up and run your application. If you'd like to submit a _private repository_, please remember to add [Caio](https://github.com/CaioCosta) and [Bill](https://github.com/billaddison) with viewer access to the repository. 

The deadline for submissions is **Monday, 12th of October**. _Submissions will not be accepted after this date._


## Tips

- Keep it simple
- Data persistence is not required
- Please ensure your readme file contains valid and simple instructions
- Please use placeholder data only (i.e. do not use real or identifiable places)
- Feel free to validate fields according to your own validation logic
- Verify your application fully functions prior to submission


## Submissions

[Submit your test here](https://forms.gle/UcqQkBqCCvZhi7pe8)

# kalpa-inquirer [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url][![License][apache-image]][apache-url]

> Kalpa module for inquirer

## Installation

```sh

$ npm install kalpa kalpa-inquirer -g
```

```
# playbook.yaml
kalpa:
  - play:
      - name: Getting answers using inquirer
        kalpa-inquirer:
          ask:
            - type: list
              name: theme
              message: What do you want to do?
              choices:
                - Order a Pizza
                - Make a reservation

            - type: list
              name: size
              message: What is the size need?
              choices:
                - Jumbo
                - Large
                - Standard
                - Medium
                - Small
                - Micro
            - type: input
              name: first_name
              message: What's your first name

            - type: checkbox
              message: Select toppings
              name: toppings
              choices:
                - name: Pepperoni
                - name: Ham

            - type: password
              message: Enter a password
              name: password
              mask: '*'

            - type: expand
              message: Conflict on `file.js`:
              name: overwrite
              choices:
                - key: y
                  name: Overwrite
                  value: overwrite
                - key: a
                  name: Overwrite this one and all next
                  value: overwrite_all
                - key: d
                  name: Show diff
                  value: diff

          result:
            file: answer.json
            type: json


```

## Usage

```console
foo@bar:~$ kalpa playbook.yaml
```

## License

Apache-2.0 © [Vinay Patil]()

[npm-image]: https://badge.fury.io/js/kalpa-inquirer.svg
[npm-url]: https://npmjs.org/package/kalpa-inquirer
[travis-image]: https://travis-ci.com/patilvinay/kalpa-inquirer.svg?branch=master
[travis-url]: https://travis-ci.com/patilvinay/kalpa-inquirer
[daviddm-image]: https://david-dm.org/patilvinay/kalpa-inquirer.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/patilvinay/kalpa-inquirer
[coveralls-image]: https://coveralls.io/repos/patilvinay/kalpa-inquirer/badge.svg
[coveralls-url]: https://coveralls.io/r/patilvinay/kalpa-inquirer
[apache-image]: https://img.shields.io/badge/License-Apache%202.0-blue.svg
[apache-url]: https://opensource.org/licenses/Apache-2.0

// Selected rules based on @18F/stylelint-rules and stylelint-config-primer
module.exports = {
  'rules': {
    'at-rule-empty-line-before': [
      'always', {
        except: [ 'blockless-after-blockless', 'first-nested' ],
        ignore: ['after-comment'],
      }
    ],
    'at-rule-name-case': 'lower',
    'at-rule-name-space-after': 'always-single-line',
    'at-rule-semicolon-newline-after': 'always',
    'block-closing-brace-newline-after': 'always',
    'block-closing-brace-newline-before': 'always-multi-line',
    'block-closing-brace-space-before': 'always-single-line',
    'block-no-empty': true,
    'block-opening-brace-newline-after': 'always-multi-line',
    'block-opening-brace-space-after': 'always-single-line',
    'block-opening-brace-space-before': 'always',
    'color-hex-case': 'lower',
    'color-hex-length': 'short',
    'color-named': 'never',
    'color-no-invalid-hex': true,
    'comment-empty-line-before': [
      'always',
      {
        'except': [
          'first-nested'
        ],
        'ignore': [
          'stylelint-commands'
        ]
      }
    ],
    'comment-whitespace-inside': 'always',
    'declaration-bang-space-after': 'never',
    'declaration-bang-space-before': 'always',
    'declaration-block-no-duplicate-properties': [
      true,
      {
        'ignore': [
          'consecutive-duplicates'
        ]
      }
    ],
    'declaration-block-no-shorthand-property-overrides': true,
    'declaration-block-semicolon-newline-after': 'always-multi-line',
    'declaration-block-semicolon-space-after': 'always-single-line',
    'declaration-block-semicolon-space-before': 'never',
    'declaration-block-single-line-max-declarations': 1,
    'declaration-block-trailing-semicolon': 'always',
    'declaration-colon-space-after': 'always-single-line',
    'declaration-colon-space-before': 'never',
    'declaration-no-important': true,
    'declaration-property-value-blacklist': {
      '/^transition/': [
        '/all/'
      ],
      '/^background/': [
        'http:',
        'https:'
      ],
      '/^border/': [
        'none'
      ],
      '/.+/': [
        'initial'
      ]
    },
    'declaration-property-value-whitelist': {
      '/color/': ['/(\$|\#)/']
    },
    'font-family-name-quotes': 'always-where-recommended',
    'function-calc-no-unspaced-operator': true,
    'function-comma-space-after': 'always-single-line',
    'function-comma-space-before': 'never',
    'function-linear-gradient-no-nonstandard-direction': true,
    'function-max-empty-lines': 0,
    'function-name-case': 'lower',
    'function-parentheses-space-inside': 'never-single-line',
    'function-url-quotes': 'always',
    'function-whitespace-after': 'always',
    'indentation': 2,
    'length-zero-no-unit': true,
    'max-empty-lines': 1,
    'max-nesting-depth': 4,
    'media-feature-colon-space-after': 'always',
    'media-feature-colon-space-before': 'never',
    'media-feature-parentheses-space-inside': 'always',
    'media-feature-range-operator-space-after': 'always',
    'media-feature-range-operator-space-before': 'always',
    'media-query-list-comma-space-after': 'always-single-line',
    'media-query-list-comma-space-before': 'never',
    'no-duplicate-selectors': true,
    'no-eol-whitespace': true,
    'no-extra-semicolons': true,
    'no-invalid-double-slash-comments': true,
    'no-missing-end-of-source-newline': true,
    'number-leading-zero': 'always',
    'number-no-trailing-zeros': true,
    'property-case': 'lower',
    'property-no-vendor-prefix': true,
    'rule-empty-line-before': [ 'always-multi-line', {
      ignore: ['after-comment'],
    } ],
    'selector-attribute-brackets-space-inside': 'never',
    'selector-attribute-operator-space-after': 'never',
    'selector-attribute-operator-space-before': 'never',
    'selector-combinator-space-after': 'always',
    'selector-combinator-space-before': 'always',
    'selector-list-comma-space-before': 'never',
    'selector-max-compound-selectors': 3,
    'selector-max-empty-lines': 0,
    'selector-max-specificity': '0,4,0',
    'selector-no-id': true,
    'selector-no-qualifying-type': true,
    'selector-pseudo-class-case': 'lower',
    'selector-pseudo-class-parentheses-space-inside': 'never',
    'selector-pseudo-element-case': 'lower',
    'selector-pseudo-element-colon-notation': 'double',
    'selector-pseudo-element-no-unknown': true,
    'selector-type-case': 'lower',
    'shorthand-property-no-redundant-values': true,
    'string-no-newline': true,
    'string-quotes': 'single',
    'unit-case': 'lower',
    'unit-no-unknown': true,
    'value-list-comma-newline-after': 'always-multi-line',
    'value-list-comma-space-after': 'always-single-line',
    'value-list-comma-space-before': 'never',
    'value-no-vendor-prefix': true
  }
}
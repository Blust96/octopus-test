import type { CodegenConfig } from '@graphql-codegen/cli'

import { API_ENDPOINT } from './config/api'

const config: CodegenConfig = {
  schema: API_ENDPOINT,
  documents: ['**/*.tsx'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './gql/': {
      preset: 'client',
    },
  },
}

export default config

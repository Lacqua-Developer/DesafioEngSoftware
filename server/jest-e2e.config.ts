import jestconfig from './jest.config'

export default {
    ...jestconfig,
    testRegex: '.e2e-spec.ts$',
}
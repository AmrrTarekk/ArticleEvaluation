import 'babel-polyfill'
import { handleSubmit } from '../src/client/js/formHandler'

describe("Testing that the url is being submitted successfully", () => {
    test("Testing that handleSubmit is a function", () => {
        expect(typeof handleSubmit). toBe('function')
    })

    test("Testing the handleSubmit() function to be defined", () => {
           expect(handleSubmit).toBeDefined();
    })
});
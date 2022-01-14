import 'babel-polyfill'
import { CheckForURL } from "../src/client/js/CheckForURL";

describe("Testing that the url is being submitted successfully", () => {
    test("Testing that CheckForURL is a function", () => {
        expect(typeof CheckForURL). toBe('function')
    })

    test("Testing the CheckForURL function to be defined", () => {
           expect(CheckForURL).toBeDefined();
    })

    test("Testing that input url is valid", () => {
        expect(CheckForURL).toBeTruthy()
    })
});
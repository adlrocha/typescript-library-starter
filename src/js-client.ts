// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
export default class DummyClass {
    public static test(a: string): string {
        return "Test works: " + a
    }
}

export function testIsolated(a: string): string {
    return "Test isolated works: " + a
}



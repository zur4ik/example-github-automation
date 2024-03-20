import * as chai from "chai";
const assert = chai.assert;

describe('Files', () => {
    describe('Export', () => {
        it('should export pdf', () => {
            assert.isTrue(true);
        })

        it('should export html', () => {
            assert.isTrue(true);
        })

        it('should export yml', () => {
            assert.isTrue(true);
        })

        it('should export text', () => {
            // fail in 50% of the cases
            if (Math.random() < 0.5) {
                throw new Error('An exception occurred');
            } else {
                assert.isTrue(true);
            }
        })
    })
})
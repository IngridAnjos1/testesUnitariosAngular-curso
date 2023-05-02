// import { serialize } from "v8";
import { UniqueIdService } from "./unique-id.service";

describe('UniqueIdService.name', () => {

    let service: UniqueIdService = null;
    beforeEach(() => {
        service = new UniqueIdService();
    })

    it(`#${UniqueIdService.prototype.generatedUniqueIdWithPrefix.name}
        should generate id when called with prefix`, () => {
        const id = service.generatedUniqueIdWithPrefix('app');
        expect(id.startsWith('app')).toBeTrue();
    });

    it(`#${UniqueIdService.prototype.generatedUniqueIdWithPrefix.name}
    should return the number of generatedIds when called `, () => {
        service.generatedUniqueIdWithPrefix('app');
        service.generatedUniqueIdWithPrefix('app');

        expect(service.getNumberOfGeneratedUniqueIds()).toBe(2);
    });

    it(`#${UniqueIdService.prototype.generatedUniqueIdWithPrefix.name}
        should throw when called whith empty`, () => {
        const emptyValues = [null, undefined, '','0','1'];
        emptyValues.forEach(emptyValue => {
            expect(() => service.generatedUniqueIdWithPrefix(emptyValue))
                .withContext(`Empty value: ${emptyValue}`);
        });
    });
});
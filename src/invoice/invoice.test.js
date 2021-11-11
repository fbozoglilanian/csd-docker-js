import invoice from "./invoice";

describe("Simple", () => {
    it("Vender 1 producto de 1000$ en AL (tasa 4.00%), descuento 0%", () => {
        expect(invoice(1000)).toEqual(1000 * 1.04);
    });
    it("Vender 1 producto de 1001$ en AL (tasa 4.00%), descuento 3%", () => {
        expect(invoice(1001)).toEqual((1001*0.97) * 1.04);
    });
    it("Vender 1 producto de 5001$ en AL (tasa 4.00%), descuento 5%", () => {
        expect(invoice(5001)).toEqual((5001*0.95) * 1.04);
    });
});
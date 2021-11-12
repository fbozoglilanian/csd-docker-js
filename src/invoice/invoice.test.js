import invoice from "./invoice";

describe("MVP", () => {
    it("Vender 1 producto de 1000$ en CA (tasa 8.25%), descuento 0%", () => {
        //Arrange
        const price = 1000;
        const expected = 1000 * 1.0825;
        //Act
        const result = invoice(price);
        //Assert
        expect(result).toEqual(expected);
    });
    it("Vender 1 producto de 1001$ en CA (tasa 8.25%), descuento 3%", () => {
        expect(invoice(1001)).toEqual((1001 * 0.97) * 1.0825);
    });
    it("Vender 1 producto de 5001$ en CA (tasa 8.25%), descuento 5%", () => {
        expect(invoice(5001)).toEqual((5001 * 0.95) * 1.0825);
    });
    it("Vender 5 productos de 1001$ en CA (tasa 8.25%), descuento 5%", () => {
        expect(invoice(1001, 5)).toEqual((1001 * 5 * 0.95) * 1.0825);
    });
    it("Vender 8 productos de 1000$ en CA (tasa 8.25%), descuento 7%", () => {

        //Arrange
        const price = 1000;
        const qty = 8;
        const expected = price * qty * 0.93 * 1.0825;
        //Act
        const result = invoice(price, qty);
        //Assert
        expect(result).toEqual(expected);
    });

    it("Vender 1 producto de 10001$ en CA (tasa 8.25%), descuento 10%", () => {
        //Arrange
        const price = 10001;
        const qty = 1;
        const expected = price * qty * 0.90 * 1.0825;
        //Act
        const result = invoice(price, qty);
        //Assert
        expect(result).toEqual(expected);
    });

    it("Vender 51 productos de 1000$ en CA (tasa 8.25%), descuento 15%", () => {
        //Arrange
        const price = 1000;
        const qty = 51;
        const expected = price * qty * 0.85 * 1.0825;
        //Act
        const result = invoice(price, qty);
        //Assert
        expect(result).toEqual(expected);
    });

    it("ERROR: Vender -1 productos de 1000$ en CA (tasa 8.25%), descuento 15%", () => {
        //Arrange
        const price = 1000;
        const qty = -1;
        //Act
        //Assert
        expect(() => {
            invoice(price, qty);
        }).toThrow();
    });

});
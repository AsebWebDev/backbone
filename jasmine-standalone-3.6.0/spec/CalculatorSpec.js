describe('Calculator', () => {
    var calculator;

    beforeEach(() => {
        calculator = new Calculator()
    })

    afterEach(() => {
        console.log("Another test done")
    })

    describe('add', () => {
        it ('should be able to add two numbers', () => {
            var result = calculator.add(2,3);
    
            expect(result).toEqual(5)
        })
    
        it ('should throw an error when both arguments are not provided', () => {
            expect( () => calculator.add(1)).toThrow()
        })

        it ('should be called with the right arguments',() => {
            spyOn (calculator, 'add').and.returnValue(7);

            var result = calculator.add(2, 5);

            expect(result).toEqual(7);

            expect(calculator.add).toHaveBeenCalled();
            expect(calculator.add).toHaveBeenCalledWith(2,5);
        })
    })
})
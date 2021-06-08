describe('Greetings factory function', function () {
    
    describe('greetings function', function () {
        it('should return greeting "Hello Thato"', function () {
            let greetings2 = greetings();

            assert.equal("Hello, Thato", greetings2.greetings1("Thato","English"));
        });


        it('should return greeting "Molo, Beyonce"', function () {
            let greetings2 = greetings();

            assert.equal("Molo, Beyonce", greetings2.greetings1("Beyonce","isiXhosa"));
        });

        it('should return greeting "Hallo, Andiswa" ', function () {
            let greetings2 = greetings();

            assert.equal("Hallo, Andiswa", greetings2.greetings1("Andiswa","Afrikaans"));
        });
    });


     
    describe('counter', function () {
        it('should count greeting and return 1', function () {
            let greetings2 = greetings();

            greetings2.greetings1("Thato","English");
            assert.equal(1, greetings2.getCount());

        });

        it('should count greetings and return 3', function () {
            let greetings2 = greetings();

            greetings2.greetings1("Thato","English");
            greetings2.greetings1("Andiswa","Afrikaans");
            greetings2.greetings1("Beyonce","Afrikaans");

            assert.equal(3, greetings2.getCount());

        });
    });

  
    describe('empty string input', function () {
        it('should return "please enter name" error message if empty string is entered', function () {
            let greetings2 = greetings();

            assert.equal("Please enter name", greetings2.errors("","English"));
        });
    });

    describe('number input', function () {
        it('should return "please enter name" error message if number is entered', function () {
            let greetings2 = greetings();

            assert.equal("Please enter name", greetings2.errors(99,"isiXhosa"));
        });
    });

    describe(' radio button not selected', function () {
        it('should return "please choose language" if radio button is not selected', function () {
            let greetings2 = greetings();

            assert.equal("Please choose language", greetings2.errors("Thato",""));
        });
    });

    describe(' radio button and text input not selected', function () {
        it('should return "please enter name and choose language" if radio button and text input is not selected', function () {
            let greetings2 = greetings();

            assert.equal("Please enter name and choose language", greetings2.errors("",""));
        });
    });

    describe('success greeting message', function () {
        it('should return "you have been greeted sucessfully"', function () {
            let greetings2 = greetings();

            assert.equal("You have been succesfully greeted", greetings2.successGreeting("Thato","English"));
        });

        it('should not return "you have been greeted sucessfully" because an empty input has been entered', function () {
            let greetings2 = greetings();

            assert.equal(null, greetings2.successGreeting("","English"));
        });

        // it('should return "you have already been greeted"', function () {
        //     let greetings2 = greetings();

        //     assert.equal("Hello, Thato", greetings2.greetings1("Thato","English"));
        //     assert.equal("Hallo, Thato", greetings2.greetings1("Thato","Afrikaans"));

        //     assert.equal("You have been succesfully greeted :)", greetings2.successGreeting("Thato"));
        //     assert.equal("You have already been greeted", greetings2.successGreeting("Thato"));
        // });

   
    });





    describe('lowercase to uppercase', function () {
        it('should make first letter uppercase for name', function () {
            let greetings2 = greetings();

           assert.equal("Hello, Thato", greetings2.greetings1("thato","English"))
        });

        it('should make other letters lowercase for name', function () {
            let greetings2 = greetings();

           assert.equal("Hello, Andiswa", greetings2.greetings1("ANDISWA","English"))
        });

      
    });

    describe('object that stores name with values', function () {
        it('should store object with names followed by 0', function () {
            let greetings2 = greetings();

            
            greetings2.greetings1("Thato","English");
            assert.deepEqual({Thato:0}, greetings2.getNames());

        });

        it('should store object with names followed by 0', function () {
            let greetings2 = greetings();

            
            greetings2.greetings1("Thato","English");
            greetings2.greetings1("Andiswa","English");

            assert.deepEqual({Thato:0 ,Andiswa:0}, greetings2.getNames());

        });

        it('should store object with names that are empty string or numbers as empty object', function () {
            let greetings2 = greetings();

            
            greetings2.greetings1("","English");
            greetings2.greetings1("99","English");

            assert.deepEqual({}, greetings2.getNames());

        });
    });

      
    describe('greetings function with names that have been greeted already', function () {
        it('should return a count of 1 even though same name has been greeted twice', function () {
            let greetings2 = greetings();

            greetings2.greetings1("Thato","English");
            greetings2.greetings1("Thato","Afrikaans");

            assert.equal(1, greetings2.getCount());
        });

        it('should return a count of 2 even though the same names has been greeted twice', function () {
            let greetings2 = greetings();

            greetings2.greetings1("Thato","English");
            greetings2.greetings1("Thato","Afrikaans");
            greetings2.greetings1("Andiswa","English");
            greetings2.greetings1("Andiswa","Afrikaans");

            assert.equal(2, greetings2.getCount());
        });




    });

    describe('greetings function with names that have been greeted already', function () {
        it('should return a count of 1 even though same name has been greeted twice and it still should greet that name', function () {
            let greetings2 = greetings();

            greetings2.greetings1("Thato","English");
            greetings2.greetings1("Thato","Afrikaans");

            assert.equal(1, greetings2.getCount());
            assert.equal("Hello, Thato", greetings2.greetings1("Thato","English"))
        });
        it('should return a count of 1 even though an empty string has been entered', function () {
            let greetings2 = greetings();

            greetings2.greetings1("Thato","English");
            greetings2.greetings1("","Afrikaans");

            assert.equal(1, greetings2.getCount());
            assert.equal("Hello, Thato", greetings2.greetings1("Thato","English"))
        });

        it('should return a count of 2 even though the same names have been greeted twice and it still should greet those names', function () {
            let greetings2 = greetings();

            greetings2.greetings1("Thato","English");
            greetings2.greetings1("Thato","Afrikaans");
            greetings2.greetings1("Andiswa","English");
            greetings2.greetings1("Andiswa","Afrikaans");

            assert.equal(2, greetings2.getCount());
            assert.equal("Hello, Thato", greetings2.greetings1("Thato","English"))
            assert.equal("Hallo, Thato", greetings2.greetings1("Thato","Afrikaans"))
            assert.equal("Hello, Andiswa", greetings2.greetings1("Andiswa","English"))
            assert.equal("Hallo, Andiswa", greetings2.greetings1("Andiswa","Afrikaans"))

        });




    });


   

   



});

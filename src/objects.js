let a = {
    b: {
        a: function () {
            return {
                firstName: '',
                lasttName: '',

                getName: function () {
                    return this.firstName + this.lasttName;
                },

                friend: {
                    name: '',
                    getName: () => {
                        console.log(this.a().friend);
                    },
                    getN: function () {
                        console.log(this);
                    }
                }
            }
        }
    }
}

a.b.a().friend.getName();
a.b.a().friend.getN();
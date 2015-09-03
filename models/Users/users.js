module.exports = function(db, cb)
{
    var User = db.define('User', {
        nickname: String,
        email: String,
        password: String,
        uuid: String,
        active: Boolean,
        dateJoined: Date,
        lastUpdated: Date
    },
    {
        validations: {
            email: [orm.enforce.required(error.errorStr(error.missingRequiredField, "email is required"))]
        }
    })
}

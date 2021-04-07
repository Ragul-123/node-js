exports.dbConnection = function () {
    var dbconfig = {
        user: 'sa',
        password: 'aspire@123',
        server: 'ASPIRE1816\\MSSQLSERVER2017',
        database: 'Login_Details',
        options: {
            enableArithAbort: true,
            trustedconnection: true,
            instancename: 'MSSQLSERVER2017'
        },
        port: 1433
    };
    
    return dbconfig;
};
public class AccountController {
    @AuraEnabled
    public static List<Account> getAccounts(String nameString){
        nameString = '%'+nameString+'%'; 
        List<Account> accList = [SELECT Id, Name, Phone, Rating 
                                FROM Account 
                                WHERE Name like :nameString
                                LIMIT 10];
        return accList;
    }
}

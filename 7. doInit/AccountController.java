//dont mind the extension '.java'
public class AccountController {
    @AuraEnabled
    public static List<Account> getAccounts(){
        List<Account> accList = [SELECT Id, Name, Phone, Rating 
                                FROM Account 
                                LIMIT 10];
        return accList;
    }
}

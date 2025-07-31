public class Main {
      public static void main(String[] args) {
            ContactManager manager = new ContactManager();
            while (true) {
                  manager.displayMenu();
                  String choice = new java.util.Scanner(System.in).nextLine();

                  switch (choice) {
                        case "1" -> manager.showAllContacts();
                        case "2" -> manager.searchContactById();
                        case "3" -> manager.addNewContact();
                        case "4" -> manager.updateContact();
                        case "5" -> manager.deleteContact();
                        default -> {
                              System.out.println("Cảm ơn bạn đã sử dụng chương trình.");
                              return;
                        }
                  }
            }
      }
}

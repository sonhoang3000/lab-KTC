import java.util.Scanner;

public class App {
    public static void main(String[] args) {
        ContactManager manager = new ContactManager();
        Scanner scanner = new Scanner(System.in);
        boolean running = true;

        while (running) {
            manager.showMenu();
            String choice = scanner.nextLine();

            switch (choice) {
                case "1":
                    manager.displayContacts();
                    break;
                case "2":
                    manager.searchContact();
                    break;
                case "3":
                    manager.addContact();
                    break;
                case "4":
                    manager.editContact();
                    break;
                case "5":
                    manager.deleteContact();
                    break;
                default:
                    System.out.println("Cảm ơn bạn đã sử dụng chương trình!");
                    running = false;
                    break;
            }
        }
        scanner.close();
    }
}

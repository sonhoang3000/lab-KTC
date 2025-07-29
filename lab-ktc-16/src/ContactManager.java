import java.util.ArrayList;
import java.util.Scanner;

public class ContactManager {
      private ArrayList<Contact> contacts = new ArrayList<>();
      private Scanner scanner = new Scanner(System.in);

      public void showMenu() {
            System.out.println("\n================ MENU QUẢN LÝ DANH BẠ ================");
            System.out.println("1. Hiển thị danh sách liên lạc");
            System.out.println("2. Tìm kiếm liên lạc theo mã liên lạc");
            System.out.println("3. Thêm mới liên lạc");
            System.out.println("4. Sửa thông tin liên lạc");
            System.out.println("5. Xóa thông tin liên lạc");
            System.out.print("=> Mời bạn chọn chức năng [1->5] hoặc nhấn phím khác để thoát: ");
      }

      public void displayContacts() {
            if (contacts.isEmpty()) {
                  System.out.println("Danh bạ trống.");
                  return;
            }
            for (Contact contact : contacts) {
                  System.out.println(contact);
            }
      }

      public void searchContact() {
            System.out.print("Nhập mã liên lạc cần tìm: ");
            String id = scanner.nextLine();
            for (Contact c : contacts) {
                  if (c.getId().equalsIgnoreCase(id)) {
                        System.out.println("Thông tin liên lạc tìm thấy: " + c);
                        return;
                  }
            }
            System.out.println("Không tìm thấy liên lạc với ID: " + id);
      }

      public void addContact() {
            System.out.print("Nhập ID: ");
            String id = scanner.nextLine();
            System.out.print("Nhập tên: ");
            String name = scanner.nextLine();
            System.out.print("Nhập số điện thoại: ");
            String phone = scanner.nextLine();
            System.out.print("Nhập email: ");
            String email = scanner.nextLine();
            System.out.print("Nhập địa chỉ: ");
            String address = scanner.nextLine();

            contacts.add(new Contact(id, name, phone, email, address));
            System.out.println("Đã thêm liên lạc thành công.");
      }

      public void editContact() {
            System.out.print("Nhập ID liên lạc cần sửa: ");
            String id = scanner.nextLine();
            for (Contact c : contacts) {
                  if (c.getId().equalsIgnoreCase(id)) {
                        System.out.print("Nhập tên mới: ");
                        c.setName(scanner.nextLine());
                        System.out.print("Nhập số điện thoại mới: ");
                        c.setPhone(scanner.nextLine());
                        System.out.print("Nhập email mới: ");
                        c.setEmail(scanner.nextLine());
                        System.out.print("Nhập địa chỉ mới: ");
                        c.setAddress(scanner.nextLine());
                        System.out.println("Đã cập nhật thông tin liên lạc.");
                        return;
                  }
            }
            System.out.println("Không tìm thấy liên lạc với ID: " + id);
      }

      public void deleteContact() {
            System.out.print("Nhập ID liên lạc cần xóa: ");
            String id = scanner.nextLine();
            for (Contact c : contacts) {
                  if (c.getId().equalsIgnoreCase(id)) {
                        contacts.remove(c);
                        System.out.println("Đã xóa liên lạc.");
                        return;
                  }
            }
            System.out.println("Không tìm thấy liên lạc với ID: " + id);
      }
}

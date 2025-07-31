import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class ContactManager {
      private final List<Contact> contactList = new ArrayList<>();
      private final Scanner scanner = new Scanner(System.in);

      public void displayMenu() {
            System.out.println("\n====== MENU QUẢN LÝ DANH BẠ ======");
            System.out.println("1. Hiển thị danh sách liên lạc");
            System.out.println("2. Tìm kiếm liên lạc theo mã liên lạc");
            System.out.println("3. Thêm mới liên lạc");
            System.out.println("4. Sửa thông tin liên lạc");
            System.out.println("5. Xóa thông tin liên lạc");
            System.out.print("=> Mời bạn chọn chức năng [1->5] hoặc nhấn phím khác để thoát: ");
      }

      public void showAllContacts() {
            if (contactList.isEmpty()) {
                  System.out.println("Danh sách liên lạc trống.");
            } else {
                  contactList.forEach(System.out::println);
            }
      }

      public void searchContactById() {
            System.out.print("Nhập ID cần tìm: ");
            int id = Integer.parseInt(scanner.nextLine());
            Contact contact = findById(id);
            if (contact != null) {
                  System.out.println("Thông tin liên lạc:");
                  System.out.println(contact);
            } else {
                  System.out.println("Không tìm thấy liên lạc có ID = " + id);
            }
      }

      public void addNewContact() {
            System.out.print("Nhập ID: ");
            int id = Integer.parseInt(scanner.nextLine());
            if (findById(id) != null) {
                  System.out.println("Liên lạc với ID này đã tồn tại!");
                  return;
            }
            System.out.print("Nhập tên: ");
            String name = scanner.nextLine();
            System.out.print("Nhập số điện thoại: ");
            String phone = scanner.nextLine();
            System.out.print("Nhập email: ");
            String email = scanner.nextLine();
            System.out.print("Nhập địa chỉ: ");
            String address = scanner.nextLine();

            contactList.add(new Contact(id, name, phone, email, address));
            System.out.println("Đã thêm liên lạc thành công!");
      }

      public void updateContact() {
            System.out.print("Nhập ID cần sửa: ");
            int id = Integer.parseInt(scanner.nextLine());
            Contact oldContact = findById(id);
            if (oldContact == null) {
                  System.out.println("Không tìm thấy liên lạc.");
                  return;
            }

            System.out.print("Nhập tên mới (bỏ trống để giữ nguyên): ");
            String name = scanner.nextLine();
            if (name.isEmpty())
                  name = oldContact.name();

            System.out.print("Nhập số điện thoại mới (bỏ trống để giữ nguyên): ");
            String phone = scanner.nextLine();
            if (phone.isEmpty())
                  phone = oldContact.phone();

            System.out.print("Nhập email mới (bỏ trống để giữ nguyên): ");
            String email = scanner.nextLine();
            if (email.isEmpty())
                  email = oldContact.email();

            System.out.print("Nhập địa chỉ mới (bỏ trống để giữ nguyên): ");
            String address = scanner.nextLine();
            if (address.isEmpty())
                  address = oldContact.address();

            contactList.remove(oldContact);
            contactList.add(new Contact(id, name, phone, email, address));
            System.out.println("Đã cập nhật liên lạc.");
      }

      public void deleteContact() {
            System.out.print("Nhập ID cần xóa: ");
            int id = Integer.parseInt(scanner.nextLine());
            Contact contact = findById(id);
            if (contact != null) {
                  contactList.remove(contact);
                  System.out.println("Đã xóa liên lạc.");
            } else {
                  System.out.println("Không tìm thấy liên lạc.");
            }
      }

      private Contact findById(int id) {
            return contactList.stream()
                        .filter(c -> c.id() == id) // thay vì c.getId()
                        .findFirst()
                        .orElse(null);
      }
}

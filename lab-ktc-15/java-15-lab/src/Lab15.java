import java.util.Scanner;

public class Lab15 {

      public static void main(String[] args) {
            Scanner scanner = new Scanner(System.in);

            double electricityBill = 0;
            double taxiFare = 0;
            double salary = 0;

            while (true) {
                  // Yêu cầu 1: Show menu
                  System.out.println("===== CHƯƠNG TRÌNH QUẢN LÝ CHI TIÊU CÁ NHÂN =====");
                  System.out.println("1. Tính tiền điện cuối tháng");
                  System.out.println("2. Tính tiền taxi cuối tháng (giả sử: đi 1 lần/tháng)");
                  System.out.println("3. Tính tiền lương cuối tháng (giả sử: thuế = 15%)");
                  System.out.println("4. Tính tổng thu nhập sau khi chi tiêu cuối tháng");
                  System.out.print("==> Mời bạn chọn chức năng [1->4] hoặc nhấn phím khác để thoát: ");

                  String choice = scanner.nextLine();

                  switch (choice) {
                        case "1":
                              // kWH
                              System.out.print("Nhập số điện tiêu thụ (kWh): ");
                              double kWh = scanner.nextDouble();
                              scanner.nextLine(); // clear buffer
                              electricityBill = calculateElectricity(kWh);
                              System.out.printf("→ Tiền điện cuối tháng: %.2f VND\n", electricityBill);
                              break;
                        case "2":
                              // Taxi
                              System.out.print("Nhập giá tiền một lần đi taxi: ");
                              taxiFare = scanner.nextDouble();
                              scanner.nextLine(); // clear buffer
                              System.out.printf("→ Tiền taxi cuối tháng: %.2f VND\n", taxiFare);
                              break;
                        case "3":
                              // SALARY WITHOUT TAX
                              System.out.print("Nhập tổng lương trước thuế: ");
                              double grossSalary = scanner.nextDouble();
                              scanner.nextLine(); // clear buffer
                              salary = calculateNetSalary(grossSalary);
                              System.out.printf("→ Lương sau thuế: %.2f VND\n", salary);
                              break;
                        case "4":
                              // TOTAL MONEY YOU HAVE
                              double remaining = salary - (electricityBill + taxiFare);
                              System.out.printf("→ Tổng thu nhập sau chi tiêu: %.2f VND\n", remaining);
                              break;
                        default:
                              System.out.println("Cảm ơn bạn đã sử dụng chương trình!");
                              return;
                  }
                  System.out.println();
            }
      }

      public static double calculateElectricity(double kWh) {
            return kWh * 4000; // 4000k
      }

      public static double calculateNetSalary(double grossSalary) {
            return grossSalary * 0.85; // 15% tax
      }
}

public record Contact(int id, String name, String phone, String email, String address) {
      @Override
      public String toString() {
            return String.format("ID: %d | Name: %s | Phone: %s | Email: %s | Address: %s",
                        id, name, phone, email, address);
      }

}
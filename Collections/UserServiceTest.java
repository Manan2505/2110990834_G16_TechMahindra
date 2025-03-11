package Collections;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
public class UserServiceTest {
    private UserService userService;
    @BeforeEach
    void setUp() {
        userService = new UserService();
        userService.addUser(new User(1, "John Doe", "john@example.com"));
        userService.addUser(new User(2, "Alice", "alice@example.com"));
    }

    @Test
    void testAddUser() {
        userService.addUser(new User(3, "Bob", "bob@example.com"));
        assertEquals(3, userService.getUserCount());
    }

    @Test
    void testGetUserById() {
        User user = userService.getUserById(1);
        assertNotNull(user);
        assertEquals("John Doe", user.getName());
    }

    @Test
    void testUpdateUser() {
        boolean updated = userService.updateUser(1, "John Updated", "john.updated@example.com");
        assertTrue(updated);
        assertEquals("John Updated", userService.getUserById(1).getName());
    }

    @Test
    void testDeleteUser() {
        boolean deleted = userService.deleteUser(2);
        assertTrue(deleted);
        assertEquals(1, userService.getUserCount());
    }
}

package Sets;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.junit.Assert.*;
public class SetCrudTest {
    private SetCrud setCrud;
    @BeforeEach
    void setUp(){

        setCrud=new SetCrud();
    }
    @Test
    void testAddElement(){
        assertTrue(setCrud.addElement("Java"));
        assertFalse(setCrud.addElement("Java"));
    }
    @Test
    void testGetAllElements(){
        setCrud.addElement("Java");
        assertEquals(1,setCrud.getSize());
        assertTrue(setCrud.containsElement("Java"));
    }
    @Test
    public void testUpdateElement(){
        setCrud.addElement("Java");
        assertTrue(setCrud.containsElement("Java"));
       setCrud.updateElement("Java","Python");
        assertTrue(setCrud.containsElement("Python"));
        assertFalse(setCrud.containsElement("Java"));
    }
}

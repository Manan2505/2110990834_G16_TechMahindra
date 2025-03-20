package ThreadCommunication;

public class Main {
    public static void main(String[] args) {
        Book book=new Book("The Alchemist");
        BookReader saiReader=new BookReader(book);
        BookReader samarthReader=new BookReader(book);

        Thread saiThread=new Thread(saiReader,"Sai");
        Thread samarthThread=new Thread(samarthReader,"Samarth");

        saiThread.start();
        samarthThread.start();
        try{
            Thread.sleep(3000);
        }catch (InterruptedException e){
            e.printStackTrace();
        }
        BookWriter bookWriter=new BookWriter(book);
        Thread bookWriterThread=new Thread(bookWriter);
        bookWriterThread.start();
    }
}

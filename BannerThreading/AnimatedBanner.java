package BannerThreading;
import javax.swing.*;
import java.awt.*;

public class AnimatedBanner extends JPanel implements Runnable {
    private String text = " Welcome to Java Multithreading Animation! ";
    private int x = 10; // Initial X position of the text
    private int y = 50; // Fixed Y position of the text

    public AnimatedBanner() {
        Thread t = new Thread(this);
        t.start(); // Start the animation thread
    }

    @Override
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);
        g.setFont(new Font("Arial", Font.BOLD, 20));
        g.setColor(Color.BLUE);
        g.drawString(text, x, y);
    }

    @Override
    public void run() {
        while (true) {
            x += 5; // Move text 5 pixels to the right

            // Reset position if text moves out of window width
            if (x > getWidth()) {
                x = -text.length() * 10; // Reset to start from left
            }

            repaint(); // Repaint the panel with new text position
            try {
                Thread.sleep(100); // Control animation speed
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }

    public static void main(String[] args) {
        JFrame frame = new JFrame("Animated Banner");
        AnimatedBanner banner = new AnimatedBanner();
        frame.add(banner);
        frame.setSize(600, 200);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);
    }
}
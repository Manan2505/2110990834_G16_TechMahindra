package Comparable;

import java.util.*;

public class Main {
    public static void main(String[] args) {
        List<Player> players = new ArrayList<>();
        players.add(new Player("Alice", 50));
        players.add(new Player("Bob",20));

        Collections.sort(players);
        for(Player p: players){
            System.out.println(p);
        }
    }
}

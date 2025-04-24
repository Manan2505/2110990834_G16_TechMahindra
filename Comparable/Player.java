package Comparable;

import java.util.*;

class Player implements Comparable<Player> {
    private String name;
    private int score;

    // Constructor
    public Player(String name, int score) {
        this.name = name;
        this.score = score;
    }

    @Override
    public int compareTo(Player other) {
        // First, compare by score in descending order
        if (this.score != other.score) {
            return Integer.compare(other.score,this.score); // Reverse order for descending
        }
        // If scores are the same, compare by name in ascending order
        return this.name.compareTo(other.name);
    }

    // Override toString for easy printing
    @Override
    public String toString() {
        return name + ": " + score;
    }


}

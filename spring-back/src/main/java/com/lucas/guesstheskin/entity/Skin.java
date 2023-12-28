package com.lucas.guesstheskin.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.lang.reflect.Field;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "skin")
public class Skin implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String weapon;
    private Integer yearOfRelease;
    private String container;
    private String rarity;
    private String modifier;
    private boolean skinCollection;

    private String image;

    public SkinGuess compareGuess(Skin guess){
        SkinGuess comparison = new SkinGuess();

        comparison.setSkinName(guess.getName());
        comparison.setSkinImage(guess.getImage());

        for(Field field : guess.getClass().getDeclaredFields()){
            HashMap<String, Object> map = new HashMap<>();

            try{
                if(field.getName().equals("yearOfRelease")) map.put("equals",  ((Integer) field.get(this) - (Integer) field.get(guess)));
                else map.put("equals", Objects.equals(field.get(this), field.get(guess)));

                if(field.getName().equals("skinCollection")) map.put("value", ((Boolean) field.get(guess)) ? "Yes" : "No");
                else map.put("value", field.get(guess));

                switch (field.getName()){
                    case "weapon":
                        comparison.setSameWeapon(map);
                        break;

                    case "yearOfRelease":
                        comparison.setYearsDiff(map);
                        break;

                    case "container":
                        comparison.setSameContainer(map);
                        break;

                    case "rarity":
                        comparison.setSameRarity(map);
                        break;

                    case "modifier":
                        comparison.setSameModifier(map);
                        break;

                    case "skinCollection":
                        comparison.setSkinCollection(map);
                        break;

                    default: break;
                }
            }
            catch (Exception e){
                e.printStackTrace();
            }
        }

        return comparison;
    }
}

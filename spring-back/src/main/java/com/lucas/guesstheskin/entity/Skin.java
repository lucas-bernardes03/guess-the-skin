package com.lucas.guesstheskin.entity;

import com.lucas.guesstheskin.enums.Modifier;
import com.lucas.guesstheskin.enums.Rarity;
import com.lucas.guesstheskin.enums.Weapon;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

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
    private String image;
}

package com.lucas.guesstheskin.config;

import com.lucas.guesstheskin.entity.Skin;
import com.lucas.guesstheskin.enums.Modifier;
import com.lucas.guesstheskin.enums.Rarity;
import com.lucas.guesstheskin.enums.Weapon;
import com.lucas.guesstheskin.repository.ISkinRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import java.util.Arrays;

@Configuration
@Profile("test")
public class TestConfig implements CommandLineRunner {

    @Autowired
    private ISkinRepository repository;

    @Override
    public void run(String... args) throws Exception {
        Skin s1 = new Skin(null, "Emerald Jörmungandr", Weapon.DEAGLE, 2019, "The Norse Cellection", Rarity.PURPLE, Modifier.NONE, "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_deagle_am_jorm_green_light_large.db1045fee0af23f28bb4affd164d07e3aadd42ec.png");
        Skin s2 = new Skin(null, "Containment Breach", Weapon.AWP, 2019, "Shattered Web Case", Rarity.RED, Modifier.STATTRAK, "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_cu_awp_virus_light_large.00307f818d425d94cb8e4eeda1e27699f713fb45.png");
        Skin s3 = new Skin(null, "Green Laminate", Weapon.AK47, 2021, "The 2021 Vertigo Collection", Rarity.BLUE, Modifier.SOUVENIR, "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_hy_ak47lam_green_light_large.ecbaf85e35ca08156cc305017d4dc4276a742a8f.png");
        Skin s4 = new Skin(null, "Hot Rod", Weapon.M4A1, 2015, "The Chop Shop Collection", Rarity.PINK, Modifier.NONE, "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_silencer_an_red_m4a1s_light_large.ec59e9b09e1e9f46af18dea65ee90e5bdfe9ebb1.png");
        Skin s5 = new Skin(null, "Neo-Noir", Weapon.USP, 2017, "Spectrum Case", Rarity.RED, Modifier.STATTRAK, "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_usp_silencer_cu_usps_noir_light_large.ed0f4245c1b9031c6d410300ce6de1f1efb75481.png");

        repository.saveAll(Arrays.asList(s1, s2, s3, s4, s5));
    }
}

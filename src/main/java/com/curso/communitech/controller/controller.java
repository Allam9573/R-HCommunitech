package com.curso.communitech.controller;

import com.curso.communitech.services.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class controller {

    @Autowired
    private service mailService;

    @GetMapping("/")
    public String principal(Model modelo) {
        return "index";
    }

    @PostMapping("/mail")
    public String sendMail(@RequestParam("name") String name, @RequestParam("email") String mail, @RequestParam("subject") String subject, @RequestParam("body") String body, Model modelo) {

        String message = body + "\n\n Datos de contacto: " + "\nNombre: " + name + "\nE-mail: " + mail;
        mailService.sendMail("rhcommunitech@gmail.com", "rhcommunitech@gmail.com", subject, message);
        System.out.println("Probando");
        return "redirect:/?exitoCorreo#contacto";
    }
}

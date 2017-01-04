package com.example.demo;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.core.env.Environment;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;

@SpringBootTest
class DemoApplicationTests {

  @Autowired
  private Environment environment;

  @Test
  void contextLoads() {
    System.out.println(environment.getProperty("PATH"));
    sendSimpleMail("kenu@okdevtv.com", "subject", "content");
  }

  @Autowired
  private JavaMailSender javaMailSender;

  public void sendSimpleMail(String to, String subject, String text) {
    SimpleMailMessage message = new SimpleMailMessage();
    message.setTo(to);
    message.setSubject(subject);
    message.setText(text);
    javaMailSender.send(message);
  }
}

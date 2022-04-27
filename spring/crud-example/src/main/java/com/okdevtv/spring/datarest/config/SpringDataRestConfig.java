package com.okdevtv.spring.datarest.config;

import org.springframework.stereotype.Component;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;

@Component
public class SpringDataRestConfig implements RepositoryRestConfigurer {

  @Override
  public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
    cors.addMapping("/*")
    .allowedOrigins("*")
    .allowedMethods("GET", "POST", "PUT", "DELETE")
    .allowCredentials(false).maxAge(3600);
  }
}

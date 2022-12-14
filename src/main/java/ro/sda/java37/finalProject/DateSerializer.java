package ro.sda.java37.finalProject;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class DateSerializer extends JsonSerializer<Date> {


  @Override
  public void serialize(Date date, JsonGenerator jsonGenerator, SerializerProvider serializerProvider) throws IOException {
    SimpleDateFormat dateFormat = new SimpleDateFormat("MM/dd/yyyy");
    String dateString = dateFormat.format(date);
    jsonGenerator.writeString(dateString);
  }
}

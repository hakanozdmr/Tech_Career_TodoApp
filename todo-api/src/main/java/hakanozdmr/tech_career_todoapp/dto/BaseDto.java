package hakanozdmr.tech_career_todoapp.dto;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.MappedSuperclass;
import lombok.Data;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

@MappedSuperclass
@Data
public abstract class BaseDto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    // @CreationTimestamp
    private LocalDateTime createdDate = LocalDateTime.now();
    @UpdateTimestamp
    private LocalDateTime updatedDate;
}

package com.example.demo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/insurance")
@CrossOrigin(origins = "http://localhost:3000") // Replace with your frontend's domain
public class ToyController {
    private ToyService insuranceService;

    @Autowired
    public ToyController(ToyService insuranceService) {
        this.insuranceService = insuranceService;
    }

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody ToyModel insuranceModel) {
        ToyModel createdInsurance = insuranceService.createInsurance(insuranceModel);
        if (createdInsurance != null) {
            return ResponseEntity.status(HttpStatus.CREATED).body(createdInsurance);
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to signup");
        }
    }
}
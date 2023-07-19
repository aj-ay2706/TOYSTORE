package com.example.demo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ToyService {
    private ToyRepository insuranceRepository;

    @Autowired
    public ToyService(ToyRepository insuranceRepository) {
        this.insuranceRepository = insuranceRepository;
    }

    public ToyModel createInsurance(ToyModel insuranceModel) {
        try {
            return insuranceRepository.save(insuranceModel);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
}
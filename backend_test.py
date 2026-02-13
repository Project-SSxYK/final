#!/usr/bin/env python3
"""
    PreFab Backend API Testing Suite
Tests the core API endpoints for the PreFab application
"""
import requests
import json
from datetime import datetime
from typing import List, Dict, Any

# Backend URL from frontend environment
BACKEND_URL = "https://prefabvaiga.com/api"

class PreFabAPITester:
    def __init__(self):
        self.base_url = BACKEND_URL
        self.session = requests.Session()
        self.test_results = []
        
    def log_test(self, test_name: str, passed: bool, details: str = ""):
        """Log test results"""
        status = "✅ PASS" if passed else "❌ FAIL"
        result = {
            "test": test_name,
            "status": status,
            "passed": passed,
            "details": details,
            "timestamp": datetime.now().isoformat()
        }
        self.test_results.append(result)
        print(f"{status}: {test_name}")
        if details:
            print(f"   Details: {details}")
        print()

    def test_api_health(self):
        """Test if the API is accessible"""
        try:
            response = self.session.get(f"{self.base_url}/")
            if response.status_code == 200:
                data = response.json()
                if "message" in data and "NeoPod API" in data["message"]:
                    self.log_test("API Health Check", True, f"API is running: {data['message']}")
                    return True
                else:
                    self.log_test("API Health Check", False, f"Unexpected response: {data}")
                    return False
            else:
                self.log_test("API Health Check", False, f"HTTP {response.status_code}: {response.text}")
                return False
        except Exception as e:
            self.log_test("API Health Check", False, f"Connection error: {str(e)}")
            return False

    def test_get_cabins(self):
        """Test GET /api/cabins endpoint"""
        try:
            response = self.session.get(f"{self.base_url}/cabins")
            
            if response.status_code != 200:
                self.log_test("GET /api/cabins - Status Code", False, f"Expected 200, got {response.status_code}")
                return False
            
            self.log_test("GET /api/cabins - Status Code", True, "Returns 200 OK")
            
            # Test response is valid JSON
            try:
                data = response.json()
            except json.JSONDecodeError as e:
                self.log_test("GET /api/cabins - JSON Format", False, f"Invalid JSON: {str(e)}")
                return False
            
            self.log_test("GET /api/cabins - JSON Format", True, "Valid JSON response")
            
            # Test response is a list
            if not isinstance(data, list):
                self.log_test("GET /api/cabins - Response Type", False, f"Expected list, got {type(data)}")
                return False
            
            self.log_test("GET /api/cabins - Response Type", True, f"Returns list with {len(data)} items")
            
            # Test cabin data structure if cabins exist
            if len(data) > 0:
                cabin = data[0]
                required_fields = ["id", "name", "tagline", "description", "image_url", "specs", "is_new"]
                missing_fields = []
                
                for field in required_fields:
                    if field not in cabin:
                        missing_fields.append(field)
                
                if missing_fields:
                    self.log_test("GET /api/cabins - Data Structure", False, f"Missing fields: {missing_fields}")
                    return False
                
                # Validate field types
                type_errors = []
                if not isinstance(cabin["id"], str):
                    type_errors.append("id should be string")
                if not isinstance(cabin["name"], str):
                    type_errors.append("name should be string")
                if not isinstance(cabin["tagline"], str):
                    type_errors.append("tagline should be string")
                if not isinstance(cabin["description"], str):
                    type_errors.append("description should be string")
                if not isinstance(cabin["image_url"], str):
                    type_errors.append("image_url should be string")
                if not isinstance(cabin["specs"], list):
                    type_errors.append("specs should be list")
                if not isinstance(cabin["is_new"], bool):
                    type_errors.append("is_new should be boolean")
                
                if type_errors:
                    self.log_test("GET /api/cabins - Data Types", False, f"Type errors: {type_errors}")
                    return False
                
                self.log_test("GET /api/cabins - Data Structure", True, "All required fields present with correct types")
                
                # Log sample cabin data
                sample_cabin = {k: v for k, v in cabin.items() if k in required_fields}
                self.log_test("GET /api/cabins - Sample Data", True, f"Sample cabin: {json.dumps(sample_cabin, indent=2)}")
            else:
                self.log_test("GET /api/cabins - Data Structure", True, "Empty list returned (no cabins in database)")
            
            return True
            
        except Exception as e:
            self.log_test("GET /api/cabins - Exception", False, f"Unexpected error: {str(e)}")
            return False

    def test_post_contact(self):
        """Test POST /api/contact endpoint"""
        # Test data
        contact_data = {
            "name": "John Smith",
            "email": "john.smith@example.com",
            "message": "I'm interested in learning more about the Pod Pro model.",
            "interested_model": "Pod Pro"
        }
        
        try:
            response = self.session.post(
                f"{self.base_url}/contact",
                json=contact_data,
                headers={"Content-Type": "application/json"}
            )
            
            if response.status_code != 200:
                self.log_test("POST /api/contact - Status Code", False, f"Expected 200, got {response.status_code}: {response.text}")
                return False
            
            self.log_test("POST /api/contact - Status Code", True, "Returns 200 OK")
            
            # Test response is valid JSON
            try:
                data = response.json()
            except json.JSONDecodeError as e:
                self.log_test("POST /api/contact - JSON Format", False, f"Invalid JSON: {str(e)}")
                return False
            
            self.log_test("POST /api/contact - JSON Format", True, "Valid JSON response")
            
            # Test response structure
            required_fields = ["id", "status", "timestamp"]
            missing_fields = []
            
            for field in required_fields:
                if field not in data:
                    missing_fields.append(field)
            
            if missing_fields:
                self.log_test("POST /api/contact - Response Structure", False, f"Missing fields: {missing_fields}")
                return False
            
            # Validate field types and values
            type_errors = []
            if not isinstance(data["id"], str):
                type_errors.append("id should be string")
            if not isinstance(data["status"], str):
                type_errors.append("status should be string")
            if not isinstance(data["timestamp"], str):
                type_errors.append("timestamp should be string")
            
            if type_errors:
                self.log_test("POST /api/contact - Response Types", False, f"Type errors: {type_errors}")
                return False
            
            # Validate status value
            if data["status"] != "received":
                self.log_test("POST /api/contact - Status Value", False, f"Expected 'received', got '{data['status']}'")
                return False
            
            self.log_test("POST /api/contact - Response Structure", True, "All required fields present with correct types")
            self.log_test("POST /api/contact - Status Value", True, f"Status is 'received'")
            
            # Validate timestamp format
            try:
                datetime.fromisoformat(data["timestamp"].replace('Z', '+00:00'))
                self.log_test("POST /api/contact - Timestamp Format", True, "Valid timestamp format")
            except ValueError:
                self.log_test("POST /api/contact - Timestamp Format", False, f"Invalid timestamp format: {data['timestamp']}")
                return False
            
            # Log response data
            self.log_test("POST /api/contact - Response Data", True, f"Response: {json.dumps(data, indent=2)}")
            
            return True
            
        except Exception as e:
            self.log_test("POST /api/contact - Exception", False, f"Unexpected error: {str(e)}")
            return False

    def test_post_contact_validation(self):
        """Test POST /api/contact input validation"""
        # Test missing required fields
        invalid_data = {
            "name": "John Smith"
            # Missing email
        }
        
        try:
            response = self.session.post(
                f"{self.base_url}/contact",
                json=invalid_data,
                headers={"Content-Type": "application/json"}
            )
            
            if response.status_code == 422:  # FastAPI validation error
                self.log_test("POST /api/contact - Validation", True, "Properly validates required fields (422 for missing email)")
            elif response.status_code == 400:  # Bad request
                self.log_test("POST /api/contact - Validation", True, "Properly validates required fields (400 for missing email)")
            else:
                self.log_test("POST /api/contact - Validation", False, f"Expected 422 or 400 for invalid data, got {response.status_code}")
                return False
            
            return True
            
        except Exception as e:
            self.log_test("POST /api/contact - Validation Exception", False, f"Unexpected error: {str(e)}")
            return False

    def run_all_tests(self):
        """Run all tests and return summary"""
        print("=" * 60)
        print("NeoPod Backend API Test Suite")
        print("=" * 60)
        print()
        
        # Test API health first
        if not self.test_api_health():
            print("❌ API is not accessible. Stopping tests.")
            return self.get_summary()
        
        # Run main tests
        self.test_get_cabins()
        self.test_post_contact()
        self.test_post_contact_validation()
        
        return self.get_summary()

    def get_summary(self):
        """Get test summary"""
        total_tests = len(self.test_results)
        passed_tests = sum(1 for result in self.test_results if result["passed"])
        failed_tests = total_tests - passed_tests
        
        print("=" * 60)
        print("TEST SUMMARY")
        print("=" * 60)
        print(f"Total Tests: {total_tests}")
        print(f"Passed: {passed_tests}")
        print(f"Failed: {failed_tests}")
        print(f"Success Rate: {(passed_tests/total_tests*100):.1f}%" if total_tests > 0 else "No tests run")
        print()
        
        if failed_tests > 0:
            print("FAILED TESTS:")
            for result in self.test_results:
                if not result["passed"]:
                    print(f"❌ {result['test']}: {result['details']}")
            print()
        
        return {
            "total": total_tests,
            "passed": passed_tests,
            "failed": failed_tests,
            "success_rate": (passed_tests/total_tests*100) if total_tests > 0 else 0,
            "results": self.test_results
        }

if __name__ == "__main__":
    tester = PreFabAPITester()
    summary = tester.run_all_tests()
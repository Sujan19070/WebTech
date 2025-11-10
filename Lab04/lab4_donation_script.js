// Feature 1: Form Validation
function validateForm() {
  const firstName = document.getElementById("first_name").value.trim();
  const lastName = document.getElementById("last_name").value.trim();
  const email = document.getElementById("email").value.trim();
  const donationAmount = document.querySelector('input[name="amount"]:checked');

  if (!firstName || !lastName || !email || !donationAmount) {
    alert("Please fill in all required fields.");
    return false;
  }

  // Feature 2: Email Validation
  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  return true;
}

// Email Validation Function
function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
}

// Feature 3: Donation Amount Check
document.querySelectorAll('input[name="amount"]').forEach((radioButton) => {
  radioButton.addEventListener('change', function() {
    const otherAmountField = document.getElementById('other_amount');
    if (otherAmountField) {
      otherAmountField.style.display = (this.value === 'Other') ? 'block' : 'none';
    }
  });
});

// Feature 4: Recurring Donation Fields
const recurringCheckbox = document.querySelector('input[name="recurring"]');
if (recurringCheckbox) {
  recurringCheckbox.addEventListener('change', function() {
    const recurringFields = document.querySelector('.recurring-fields');
    if (recurringFields) {
      recurringFields.style.display = this.checked ? 'block' : 'none';
    }
  });
}

// Feature 5: Select State and Country Default Options
window.onload = function() {
  const stateSel = document.querySelector('select[name="state"]');
  const countrySel = document.querySelector('select[name="country"]');
  if (stateSel) stateSel.value = "Dhaka";
  if (countrySel) countrySel.value = "Bangladesh";
};

// Feature 6: Confirm Password
function validatePassword() {
  const password = document.getElementById("password")?.value;
  const confirmPassword = document.getElementById("confirm_password")?.value;

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return false;
  }
  return true;
}

// Feature 7: Reset Button Logic
const resetButton = document.querySelector('button[type="reset"]');
if (resetButton) {
  resetButton.addEventListener('click', function(event) {
    const confirmation = confirm("Are you sure you want to reset the form?");
    if (!confirmation) event.preventDefault();
  });
}

// Feature 8: Show/Hide Additional Fields
document.querySelectorAll('input[name="donation_radio"]').forEach((radioButton) => {
  radioButton.addEventListener('change', function() {
    const nameField = document.getElementById('name');
    if (nameField) {
      nameField.placeholder = (this.id === 'to_honor')
        ? "Name to honor"
        : (this.id === 'in_memory_of')
          ? "Name in memory of"
          : "";
    }
  });
});

// Feature 9: Character Limit on Comments
const commentsBox = document.getElementById("comments");
if (commentsBox) {
  commentsBox.addEventListener('input', function() {
    const charLimit = 200;
    if (this.value.length > charLimit) {
      alert("Character limit reached!");
      this.value = this.value.substring(0, charLimit);
    }
  });
}

// Feature 10: Calculate Recurring Donation Total
const monthlyInput = document.querySelector('input[name="monthly_amount"]');
if (monthlyInput) {
  monthlyInput.addEventListener('input', calculateTotalDonation);
}

function calculateTotalDonation() {
  const monthlyAmount = parseFloat(document.querySelector('input[name="monthly_amount"]').value) || 0;
  const months = parseInt(document.querySelector('input[name="months"]').value) || 0;
  const total = monthlyAmount * months;

  const recurringFields = document.querySelector('.recurring-fields');
  if (!recurringFields) return;

  // Remove old total if exists
  let totalElement = document.getElementById("total_donation");
  if (!totalElement) {
    totalElement = document.createElement('p');
    totalElement.id = "total_donation";
    recurringFields.appendChild(totalElement);
  }

  totalElement.textContent = `Total donation for ${months} months: $${total}`;
}

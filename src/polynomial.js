/**
 * Polynomial calculus on coefficient arrays.
 *
 * A polynomial is represented as an array of coefficients where the value at
 * index `i` is the coefficient of `x^i`. For example, `[4, 0, 2]` represents
 * `4 + 0·x + 2·x²`.
 */

/**
 * Derivative of a polynomial.
 *
 * Since `d/dx (Σ aᵢ·xⁱ) = Σ i·aᵢ·xⁱ⁻¹`, every coefficient moves down one power
 * and is multiplied by its old power. A constant differentiates to the empty
 * polynomial.
 *
 * Time / Space: O(n)
 *
 * @param {number[]} coeffs
 * @returns {number[]} Coefficients of the derivative.
 */
export function derivative(coeffs) {
  const result = [];
  for (let power = 1; power < coeffs.length; power++) {
    result.push(power * coeffs[power]);
  }
  return result;
}

/**
 * Indefinite integral of a polynomial.
 *
 * Since `∫ (Σ aᵢ·xⁱ) dx = C + Σ aᵢ/(i+1)·xⁱ⁺¹`, every coefficient moves up one
 * power and is divided by its new power. `C` is the constant of integration.
 *
 * Time / Space: O(n)
 *
 * @param {number[]} coeffs
 * @param {number} [constant=0] - The constant of integration `C`.
 * @returns {number[]} Coefficients of the integral.
 */
export function integral(coeffs, constant = 0) {
  const result = [constant];
  for (let power = 0; power < coeffs.length; power++) {
    result.push(coeffs[power] / (power + 1));
  }
  return result;
}

/**
 * Formats a coefficient array as a readable polynomial string.
 * Example: `[4, 0, 2]` becomes `"4 + 0X^1 + 2X^2"`.
 *
 * @param {number[]} coeffs
 * @returns {string}
 */
export function formatPolynomial(coeffs) {
  return coeffs
    .map((coeff, power) => (power === 0 ? `${coeff}` : `${coeff}X^${power}`))
    .join(' + ');
}

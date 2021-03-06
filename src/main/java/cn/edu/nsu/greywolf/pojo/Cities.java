package cn.edu.nsu.greywolf.pojo;

public class Cities {
    private Integer cityId;

    private Integer provinceId;

    private String cityName;

    public Integer getCityId() {
        return cityId;
    }

    public void setCityId(Integer cityId) {
        this.cityId = cityId;
    }

    public Integer getProvinceId() {
        return provinceId;
    }

    public void setProvinceId(Integer provinceId) {
        this.provinceId = provinceId;
    }

    public String getCityName() {
        return cityName;
    }

    public void setCityName(String cityName) {
        this.cityName = cityName == null ? null : cityName.trim();
    }

    @Override
    public String toString() {
        return "Cities{" +
                "cityId=" + cityId +
                ", provinceId=" + provinceId +
                ", cityName='" + cityName + '\'' +
                '}';
    }
}
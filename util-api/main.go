package main

import (
	"fmt"
	"net/http"
	"strings"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/nyushi/unixtime/parse"
)

func main() {
	r := gin.Default()
	r.GET("/unixtime", func(c *gin.Context) {
		c.String(http.StatusOK, fmt.Sprint(time.Now().Unix()))
		return
	})
	r.GET("/unixtime/:input", func(c *gin.Context) {
		in := c.Param("input")

		if in == "formats" {
			c.String(http.StatusOK, strings.Join(parse.Formats(), "\n"))
			return
		}
		utime := parse.FromUnix(in)
		if utime != nil {
			// Show rfc3339 from unix time
			c.String(http.StatusOK, utime.Format(time.RFC3339Nano))
			return
		}
		if t := parse.FromDateString(in); t != nil {
			// Show unix time from string
			c.String(http.StatusOK, fmt.Sprint(t.Unix()))
			return
		}
		c.String(http.StatusBadRequest, "failed to parse input")
		return
	})
	r.Run() // listen and serve on 0.0.0.0:8080
}
